// TODO: дебаунс поиска + AbortController, скелетон, обработка race condition

import { ChangeEvent, useEffect, useRef, useState } from "react";

interface Post {
  id: number;
  title: string;
}

// Типизированная функция запроса
const searchApi = async (
  query: string,
  signal: AbortSignal
): Promise<Post[]> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${encodeURIComponent(query)}`,
    { signal }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export function DebouncedSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setIsLoading(false);

      return;
    }

    const timer = setTimeout(async () => {
      // Отменяем предыдущий активный запрос
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      // Создаем новый контроллер и сохраняем его в реф
      const controller = new AbortController();
      abortControllerRef.current = controller;

      setIsLoading(true);
      setError(null);

      try {
        const data = await searchApi(query, controller.signal);
        setResults(data);
        setIsLoading(false);
      } catch (err: unknown) {
        // Обработка ошибок в TS через проверку типа или instanceof
        if (err instanceof Error) {
          if (err.name === "AbortError") {
            console.log("Запрос отменен для:", query);
          } else {
            setError(err.message);
            setIsLoading(false);
          }
        }
      }
    }, 400);

    return () => {
      clearTimeout(timer);
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Поиск постов (TS)..."
      />

      <div>
        {isLoading && <p>🔍 Загрузка данных...</p>}
        {error && <p>Ошибка: {error}</p>}

        {!isLoading && !error && results.length > 0 && (
          <ul>
            {results.map((post) => (
              <li
                key={post.id}
              >
                <strong>{post.id}.</strong> {post.title}
              </li>
            ))}
          </ul>
        )}

        {!isLoading && query && results.length === 0 && (
          <p>Ничего не найдено.</p>
        )}
      </div>
    </div>
  );
}
