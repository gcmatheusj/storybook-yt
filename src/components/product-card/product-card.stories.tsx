import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from '.';

const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  argTypes: {
    product: {
      control: { type: 'object' },
    }
  },
};

export default meta;

type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    product: {
      id: '1',
      name: 'Product Name',
      price: 100,
      image: 'https://via.placeholder.com/300',
      rating: 4.5,
      inStock: true
    }
  },
};

export const OutOfStock: Story = {
  args: {
    product: {
      id: '1',
      name: 'Product Name',
      price: 100,
      image: 'https://via.placeholder.com/300',
      rating: 4.5,
      inStock: false
    }
  },
};