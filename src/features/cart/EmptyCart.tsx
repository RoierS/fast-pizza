import LinkButton from '@/ui/LinkButton';

const EmptyCart: React.FC = () => {
  return (
    <div className="mx-auto space-y-8 px-4 py-6">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="text-center font-semibold">
        Your cart is still empty 🛒. Start adding some pizzas 🍕🍕
      </p>
    </div>
  );
};

export default EmptyCart;
