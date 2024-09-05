// import { Grid } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-full text-accent">
      <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
      {/* <Grid
        visible={true}
        height="80"
        width="80"
        color="bg-accent"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      /> */}
    </div>
  );
};

export default LoadingSpinner;
