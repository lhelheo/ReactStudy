interface FruitsViewModel {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

export default function Think() {
  const fruits = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];

  const ProductCategoryRow = (props: FruitsViewModel) => {
    return (
      <tr>
        <th colSpan={2}>{props.category}</th>
      </tr>
    );
  };

  const ProductRow = (props: FruitsViewModel) => {
    const name = props.stocked ? (
      props.name
    ) : (
      <span style={{ color: "red" }}>{props.name}</span>
    );
    return (
      <tr>
        <td>{name}</td>
        <td>{props.price}</td>
      </tr>
    );
  };

  return (
    <div>
      <h1>Page</h1>
    </div>
  );
}
