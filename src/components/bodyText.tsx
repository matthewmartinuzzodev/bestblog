export const BodyText = (props: { content? : string }) => {
    if(!props.content) return <div>Missing content</div>;
    return (
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-8 xl:px-16 dark:text-gray-400">
            {props.content}
        </p>
    );
};