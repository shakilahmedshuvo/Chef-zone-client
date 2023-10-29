const SectionTitle = ({ heading, subHeading }) => {
    return (
        <>
            <hr />
            {/* Upcoming Events section*/}
            <h2
                className='text-center text-4xl font-black text-gray-600 pt-14'>
                {heading}
            </h2>
            <p
                className='text-sm mt-5 text-yellow-400 font-black text-center'>
                {subHeading}
            </p>
        </>
    );
};

export default SectionTitle;