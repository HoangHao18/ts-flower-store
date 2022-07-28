import React from "react";
import { FlowerTableProps } from "../../Types/flowerType";
import { Card, Group, Table, createStyles} from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => ({
  tableRow: {
    borderBottom: "1px solid black"
  },
  tableCell: {
    background: "blue"
  }

}))

export const FlowerTable: React.FC<FlowerTableProps> = ({flowersList}) => {
  const { classes } = useStyles();
  return <div>
    <Card shadow="sm"  p="lg" radius="md" withBorder>
      <Card.Section>
        LIST FLOWER
      </Card.Section>
      <Group>
        <Table>
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Unit</th>
            <th>Price</th>
            <th>Stock Quantity</th>
            <th>Image</th>
            <th></th>
          </thead>
          <tbody>
            {
              (flowersList?.length > 0) ? <>{
                flowersList.map((flowerItem) => 
                  <tr className={classes.tableRow}>
                    <td className={classes.tableCell}>{flowerItem._id}</td>
                    <td>{flowerItem.name}</td>
                    <td>{flowerItem.unit}</td>
                    <td>{flowerItem.price}</td>
                    <td>{flowerItem.stockQuantity}</td>
                    <td>{flowerItem.image?.map((imageItem)=>imageItem)}</td>
                    <td>Edit</td>
                    <td>Delete</td>
                  </tr>
                )}</> : <tr>No Flower</tr>
            } 
          </tbody>
        </Table>
      </Group>
    </Card>
  </div>;
};
