export const initialItems = new Array(299999).fill(0).map((_, i) => {
return {
    id: i,
    isSelected: i === 29999,
};
});