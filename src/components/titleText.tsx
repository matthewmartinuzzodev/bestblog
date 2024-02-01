export const TitleText = (props: { book? : string }) => {
    if(!props.book) return <div>Missing book title</div>
    return (
        <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white font-mono">
            {props.book}
        </h1>
    );
};