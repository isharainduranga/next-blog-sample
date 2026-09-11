type ContainerProps = {
    children: React.ReactNode;
  };
  
  export default function Container({ children }: ContainerProps) {
    return (
      <div className="max-w-275 mx-auto bg-white min-h-screen flex flex-col">
        {children}
      </div>
    );
  }