import { Grid } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-full bg-accent">
      <Grid
        visible={true}
        height="80"
        width="80"
        color="bg-accent"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    </div>
  );
};

export default LoadingSpinner;
