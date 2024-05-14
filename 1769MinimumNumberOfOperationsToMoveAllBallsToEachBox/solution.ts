function minOperations(boxes: string): number[] {
  let result: number[] = new Array(boxes.length)
  let left = 0
  let right = 0
  let steps = 0

  for (let i = 0; i < boxes.length; i++){
    if (boxes[i] == '1'){
      steps += i
      right++
    }
  }

  for (let i = 0; i < boxes.length; i++){
    result[i] = steps

    if (boxes[i] == '1'){
      right--
      left++
    }

    steps += left
    steps -= right
  }

  return result
};
