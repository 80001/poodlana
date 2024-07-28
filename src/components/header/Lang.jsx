import React from 'react';

const Language = ({ currentLanguage, languages, onClick, buttonProps }) => {
    const getLanguageData = (code) => {
        return languages.find(language => language.code === code) || { name: 'Unknown', image: '' };
    };

    const { name, image } = getLanguageData(currentLanguage);

    return (
        <button
            onClick={onClick}
            {...buttonProps}
        >
            <img
                alt="flag"
                loading="lazy"
                width="18"
                height="18"
                decoding="async"
                className="overflow-hidden min-w-[18px] mr-2"
                style={{ color: 'transparent' }}
                src={image}
            />
            {name}
        </button>
    );
};

export default Language;
