const withHomeCardLayout = (Component: React.FC): React.FC => {
  const Wrapper = () => <div className="home-card-layout">{<Component />}</div>;
  Wrapper.displayName = "WithHomeCardWrapper";
  return Wrapper;
};

export default withHomeCardLayout;
