import { useState } from "react";

interface OrderFormProps { 
    onSubmit (order: { name: string; quantity: number }): void
}

const OrderForm: React.FC<OrderFormProps> = ({ onSubmit }) => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({ name, quantity });
        setName("");
        setQuantity(1);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>       
                <label>
                    Product Name:
                    <input
                        type="text"
                        value={name}    
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Quantity:
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        min="1"
                        required
                    />
                </label>
            </div>
            <button type="submit">Place Order</button>
        </form>
    );
};

export default OrderForm;