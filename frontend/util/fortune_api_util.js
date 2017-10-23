export const fetchFortune = id => (
  $.ajax({
    method: "GET",
    url: `/api/fortunes/${id}`
  })
);


export const fetchFortunes = data => (
  $.ajax({
    method: "GET",
    url: '/api/fortunes',
    data
  })
);
