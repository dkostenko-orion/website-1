import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';
import React from 'react';
import localizedText from '../../../../config/localized-text';

const localized = localizedText.navbar;

const Language = (props) => {
  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages
            .filter((language) => language !== currentLocale)
            .map((language) => (
              <a
                key={language}
                onClick={() => changeLocale(language)}
                style={{
                  marginLeft: '2px',
                  cursor: 'pointer',
                }}
                {...props}
              >
                {localized[languages.find((l) => l !== language)]}
              </a>
            ))
        }
      </IntlContextConsumer>
    </div>
  );
};

export default Language;
