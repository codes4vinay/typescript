interface ChaiCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

//const [count , setCount] = useState<number | null>(0);

//FC stands for Function Component, which is a type provided by React for defining functional components in TypeScript. It allows us to specify the props that the component will receive, ensuring type safety and better developer experience.
const ChaiCard: React.FC<ChaiCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="chai-card">
      <img src={imageUrl} alt={title} className="chai-card-image" />
      <h2 className="chai-card-title">{title}</h2>
      <p className="chai-card-description">{description}</p>
    </div>
  );
};

export default ChaiCard;