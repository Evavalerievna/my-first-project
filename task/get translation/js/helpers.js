'use strict';

import translations from "./translations.js";

/**
 * @param {string} language
 */
export const getTranslation = (language) => {
  console.log(translations);
  console.log(language);
	// do something
    return translations.welcome[language];
}