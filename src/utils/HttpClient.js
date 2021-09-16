const API = "https://api.themoviedb.org/3";

export function getRequest(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzY4Mzk3MzUzZjBhMzBjYjhjZmMyYjJjNDIzMDlhZiIsInN1YiI6IjYxM2U1ZWFiOTY1M2Y2MDA2OGNlOGY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gRUIDk2N63LSHiAllxH57fLuHsPohtUqK_NKHvL5MVg",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
