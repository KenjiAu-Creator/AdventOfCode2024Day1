'use strict';

import * as fs from 'node:fs';

export function findTotalDistance(filePath: string): number {
    let result = 0;
    let list1: number[] = [];
    let list2: number[] = [];

    const lists: string = fs.readFileSync(filePath, 'utf-8');

    if (lists) {
        const parseLists = lists.replaceAll("   ", ",").replaceAll("\n", ",");
        const listArr: (string | null)[] = parseLists.split(",");


        for (let i = 0; i < listArr.length; i++) {
            const value = listArr[i];

            if (value && value != undefined && value != null) {
                const num: number = Number.parseInt(value);

                if (i % 2 === 0) {
                    list1.push(num);
                } else {
                    list2.push(num);
                }
            }
        }

        list1.sort();
        list2.sort();

        for (let j = 0; j < list1.length; j++) {
            const num1 = list1[j];
            const num2 = list2[j];

            if (num1 && num2) {
                const diff: number = Math.abs(num1 - num2);
                result += diff;
            }
        }
    }

    return result;
}

export function findSimilarity(filePath: string): number {
    let result = 0;
    let list1: number[] = [];

    let freq: Record<string, number> = {};

    const lists: string = fs.readFileSync(filePath, 'utf-8');

    if (lists) {
        const parseLists = lists.replaceAll("   ", ",").replaceAll("\n", ",");
        const listArr: (string | null)[] = parseLists.split(",");

        for (let i = 0; i < listArr.length; i++) {
            const value = listArr[i];

            if (value && value != undefined && value != null) {
                const num: number = Number.parseInt(value);

                if (i % 2 === 0) {
                    list1.push(num);
                } else {
                    if (freq[num]) {
                        freq[num] = freq[num] + 1;
                    } else {
                        freq[num] = 1;
                    }
                }
            }
        }

        for (let j = 0; j < list1.length; j++) {
            const num1 = list1[j];

            if (num1) {
                const num2 = freq[num1];
                if (num2) {
                    const prod = num1 * num2;
                    result += prod;
                }
            }
        }
    }

    return result;
}