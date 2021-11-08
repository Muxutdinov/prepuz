import Navigation from "./sections/Navication";

const BrandView = (props) => {
  const { match } = props;
  return (
    <div>
      <Navigation />
      <h1>{match.params.slug}</h1>
      <h1>{match.params.id}</h1>
    </div>
  );
};
export default BrandView;
