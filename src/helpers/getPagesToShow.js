const getPagesToShow = (active, pages, totalPages) => {
    if (active <= 3) {
        return pages.slice(1, 6);
    }
    if (active > 3 && active + 3 <= totalPages) {
        return pages.slice(active - 3, active + 2);
    }
    if (active + 3 > totalPages && active !== totalPages) {
        return pages.slice(active - 4, totalPages - 1)
    }
    if (active === totalPages) {
        return pages.slice(active - 5, active - 1);
    }
}

export default getPagesToShow;