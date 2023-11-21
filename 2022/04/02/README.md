--- Part Two ---
It seems like there is still quite a bit of duplicate work planned. Instead, the Elves would like to know the number of pairs that overlap at all.

In the above example, the first two pairs (2-4,6-8 and 2-3,4-5) don't overlap, while the remaining four pairs (5-7,7-9, 2-8,3-7, 6-6,4-6, and 2-6,4-8) do overlap:

5-7,7-9 overlaps in a single section, 7.
2-8,3-7 overlaps all of the sections 3 through 7.
6-6,4-6 overlaps in a single section, 6.
2-6,4-8 overlaps in sections 4, 5, and 6.
So, in this example, the number of overlapping assignment pairs is 4.

In how many assignment pairs do the ranges overlap?

<!-- Do NOT overlap -->

.234.....
.....678.

.23......
...45....

<!-- DO overlap -->
<!-- firstEnd === secondStart -->

....567..
......789

<!-- secondEnd === firstStart -->

....567..
..345....

<!-- firstStart > secondStart && firstStart < secondEnd -->

.2345678.
..34567..

<!-- firstStart === secondStart && firstStart < secondEnd -->

.2345678.
.234567..

<!-- firstStart === secondStart && firstStart === secondEnd -->

.2345678.
.2.......

<!-- firstStart === secondEnd -->
<!-- firstEnd === secondEnd -->

.....6...
...456...

<!-- firstEnd < secondEnd && firstEnd > secondStart -->

.23456..
...45678.

(firstEnd === secondStart || firstStart === secondEnd) ||
(firstStart <= secondStart && firstEnd <= secondEnd) ||
(firstStart >= secondStart && firstEnd >= secondEnd)

<!-- firstEnd === secondStart -->

<!-- secondEnd === firstStart -->

<!-- firstStart > secondStart && firstStart < secondEnd -->

<!-- firstStart === secondStart && firstStart < secondEnd -->

<!-- firstStart === secondStart && firstStart === secondEnd -->

<!-- firstEnd === secondEnd -->

<!-- firstEnd < secondEnd && firstEnd > secondStart -->
