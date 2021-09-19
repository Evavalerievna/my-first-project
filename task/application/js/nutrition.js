'use strict';

/**
 * @param {Object} details
 * @param {string} details.title
 * @param {number} details.value
 */
export const renderTableRow = details => {
	return `
        <tr>
            <td>${details.title}</td>
            <td>${details.value}</td>
        </tr>
    `;
};