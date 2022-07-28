import React from "react";
import { Card, TextInput } from '@mantine/core';

export const FlowerForm = () => {
  return <div>
    <Card shadow="sm"  p="lg" radius="md" withBorder>
      <Card.Section>
        ADD FLOWER
      </Card.Section>
      <form>
        <TextInput label="Name" placeholder="Name of Flower" styles={{root: {textAlign: "left"}}}/>
        <div>
          <TextInput label="Unit" placeholder="Name of Flower" styles={{root: {textAlign: "left"}}}/>
          <TextInput label="Price" placeholder="Name of Flower" styles={{root: {textAlign: "left"}}}/>
        </div>
        <div>
          <span>Add Image</span>
        </div>
      </form>

    </Card>
    </div>;
   
};
