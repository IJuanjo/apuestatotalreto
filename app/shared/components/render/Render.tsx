interface RenderProps {
    children: React.ReactNode;
    fallback?: React.ReactNode;
    isRender?: boolean;
}

export const Render = ({ children, fallback, isRender }: RenderProps) => {
    return isRender ? (
        <>{children}</>
    ) : (
        <>{fallback}</>
    );
};

export default Render;