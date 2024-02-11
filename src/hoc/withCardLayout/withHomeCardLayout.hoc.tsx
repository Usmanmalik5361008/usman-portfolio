const withHomeCardLayout =
  (Component: React.FC): React.FC =>
  () =>
    <div className="home-card-layout">{<Component />}</div>;

withHomeCardLayout.displayName = "WithHomeCardLayout";

export default withHomeCardLayout;
