const withHomeCardLayout =
  (Component: React.FC): React.FC =>
  () =>
    <div className="home-card-layout">{<Component />}</div>;

export default withHomeCardLayout;
