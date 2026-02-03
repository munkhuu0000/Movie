// "use client";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";
// import { Button } from "@/components/ui/button";
// import { useQueryState, parseAsInteger } from "nuqs"; // nuqs ашиглаж байна гэж үзлээ

// type DynamicPaginationProps = {
//   nextPage: React.MouseEventHandler<HTMLButtonElement>;
//   prevPage: React.MouseEventHandler<HTMLButtonElement>;
//   currentPage: number;
//   totalPage: number;
// };

// export const DynamicPagination = ({
//   nextPage,
//   prevPage,
//   currentPage,
//   totalPage,
// }: DynamicPaginationProps) => {
//   const [page, setPage] = useQueryState(`page',
//     parseAsInteger.withDefault(1).withOptions({ shallow: false })`);

//   return (
//     <div>
//       <Pagination>
//         <PaginationContent className="flex gap-8">
//           <PaginationItem>
//             <Button
//               onClick={prevPage}
//               disabled={currentPage === 1}
//               variant="outline"
//             >
//               Previous
//             </Button>
//           </PaginationItem>
//           <PaginationItem>
//             <p>{currentPage - 1}</p>
//           </PaginationItem>
//           <PaginationItem>
//             <Button variant="outline">{currentPage}</Button>
//           </PaginationItem>
//           <PaginationItem>
//             <p>{currentPage + 1}</p>
//           </PaginationItem>{" "}
//           <PaginationItem>...</PaginationItem>
//           <PaginationItem>
//             <p>{totalPage + 1}</p>
//           </PaginationItem>
//           <PaginationItem>
//             <Button
//               onClick={nextPage}
//               disabled={currentPage === totalPage + 1}
//               variant="outline"
//             >
//               Next
//             </Button>
//           </PaginationItem>
//         </PaginationContent>
//       </Pagination>
//     </div>
//   );
// };
