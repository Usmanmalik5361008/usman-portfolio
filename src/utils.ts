export const kebabCaseToNormalText = (kebabCaseString: string): string => {
    // Split the string on hyphens
    return kebabCaseString
        .split('-')
        // Capitalize the first letter of each word
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        // Join the words back together with spaces
        .join(' ');
}
