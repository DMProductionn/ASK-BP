export type TypeCategories = {
  id: number;
  name: string;
  subcategories: [
    {
      id: number;
      name: string;
    },
  ];
};
