import React, { useMemo } from "react";

/**
 * Pagination component
 * Props:
 * - totalPages: number of total pages
 * - onPageChange: (page: number) => void
 * - siblingCount: number of pages to show before/after current
 * - boundaryCount: number of pages to always show at beginning/end
 */
export default function Pagination({
    totalPages,
    onPageChange,
    siblingCount = 1,
    boundaryCount = 1,
    currentPage,
}) {
    // Compute page items (numbers and ellipses)
    const displayedPages = useMemo(() => {
        const pages = [];
        const startPages = Array.from(
            { length: Math.min(boundaryCount, totalPages) },
            (_, i) => i + 1
        );
        const endPages = Array.from(
            { length: Math.min(boundaryCount, totalPages) },
            (_, i) => totalPages - boundaryCount + 1 + i
        );

        const siblingsStart = Math.max(
            currentPage - siblingCount,
            boundaryCount + 2
        );
        const siblingsEnd = Math.min(
            currentPage + siblingCount,
            totalPages - boundaryCount - 1
        );

        // Add start pages
        pages.push(...startPages);

        // Add first ellipsis/gap
        if (siblingsStart > boundaryCount + 2) {
            pages.push("…");
        } else if (boundaryCount + 1 < totalPages - boundaryCount) {
            pages.push(boundaryCount + 1);
        }

        // Add sibling pages
        for (let page = siblingsStart; page <= siblingsEnd; page++) {
            pages.push(page);
        }

        // Add second ellipsis/gap
        if (siblingsEnd < totalPages - boundaryCount - 1) {
            pages.push("…");
        } else if (totalPages - boundaryCount > boundaryCount) {
            pages.push(totalPages - boundaryCount);
        }

        // Add end pages
        pages.push(...endPages);

        return pages;
    }, [totalPages, currentPage, siblingCount, boundaryCount]);

    return (
        <div className="join justify-center my-4">
            {displayedPages.map((page, idx) => {
                const isEllipsis = page === "…";
                const isActive = page === currentPage;

                return (
                    <button
                        key={idx}
                        className={[
                            "join-item btn",
                            isActive && "btn-active",
                            isEllipsis && "btn-disabled cursor-default"
                        ]
                            .filter(Boolean)
                            .join(" ")}
                        onClick={() => !isEllipsis && onPageChange(page)}
                    >
                        {page}
                    </button>
                );
            })}
        </div>
    );
}
