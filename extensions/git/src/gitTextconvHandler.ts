import { execSync } from 'child_process';

export function applyTextconvToUnstaged(filePath: string): string {
    try {
        // Execute git command to apply textconv
        const command = `git show --textconv :"${filePath}"`;
        const output = execSync(command, { encoding: 'utf8' });
        return output;
    } catch (error) {
        console.error('Error applying textconv to unstaged changes:', error);
        return '';
    }
}

// This function can be integrated into the existing Git extension workflow to handle unstaged changes.