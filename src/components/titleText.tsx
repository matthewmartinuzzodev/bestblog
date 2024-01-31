export const TitleText = (props: { book? : string }) => {
    return (
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl xl:px-16 dark:text-white font-mono">
            {props.book}
        </h1>
    );
};