import BugSplat from 'bugsplat';

const bugsplat = new BugSplat('fred', 'my-ts-node-crasher', '1.0.0');

bugsplat.post(new Error('BugSplat rocks!'));