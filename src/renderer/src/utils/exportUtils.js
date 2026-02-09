/**
 * @file exportUtils.js - Export utilities for prompts
 * @description Handles exporting prompts to JSON and CSV formats
 */

/**
 * Export prompts as JSON file
 * @param {Array} prompts - Prompts array to export
 */
export const exportAsJSON = (prompts) => {
  const dataStr = JSON.stringify(prompts, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  downloadFile(dataBlob, `prompts-${new Date().toISOString().split('T')[0]}.json`);
};

/**
 * Export prompts as CSV file
 * @param {Array} prompts - Prompts array to export
 */
export const exportAsCSV = (prompts) => {
  const headers = ['ID', 'Title', 'Category', 'Text', 'Dynamic Fields'];
  const rows = prompts.map(p => [
    p.id,
    `"${p.title.replace(/"/g, '""')}"`,
    p.category,
    `"${p.text.replace(/"/g, '""')}"`,
    `"${(p.dynamicFields || []).join(', ')}"`
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');

  const dataBlob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  downloadFile(dataBlob, `prompts-${new Date().toISOString().split('T')[0]}.csv`);
};

/**
 * Trigger file download
 * @param {Blob} blob - Data blob to download
 * @param {string} filename - Name of the file
 */
const downloadFile = (blob, filename) => {
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
