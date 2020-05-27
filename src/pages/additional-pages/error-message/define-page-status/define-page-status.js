function definePageStatus() {
  const currentPage = window.location.pathname;
  const hasAuthorized = localStorage.getItem("hasAuthorized");

  if (currentPage === "/manuscripts" && hasAuthorized === "false") {
    alert("Вы не авторизованы!");
  }
}

export default definePageStatus;
