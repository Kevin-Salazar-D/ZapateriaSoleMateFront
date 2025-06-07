// utils/formatDateObject.js
export default function formatDateObject(data, fieldName = "createdAt") {
  if (!Array.isArray(data) || data.length === 0) return [];

  return data.map((item) => {
    const timestamp = item[fieldName]?._seconds;
    const formattedDate = timestamp
      ? new Date(timestamp * 1000).toLocaleDateString("es-ES", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "No es un prop de tiempo, no se modificará";


    return {
      ...item,
      [fieldName]: formattedDate,
    };
  });
}
