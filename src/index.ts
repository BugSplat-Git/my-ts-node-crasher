import { BugSplatNode as BugSplat } from "bugsplat-node";

const bugsplat = new BugSplat("fred", "my-ts-node-crasher", "1.0.0");

stackFrame0();

function stackFrame0() {
  stackFrame1();
}

function stackFrame1() {
  crash();
}

function crash() {
  bugsplat.post(new Error("BugSplat rocks!"));
}
