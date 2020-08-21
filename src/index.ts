import BugSplat from 'bugsplat-node';

const bugsplat = new BugSplat('fred', 'my-ts-node-crasher', '1.0.0');

bugsplat.post(new Error('BugSplat rocks!'));