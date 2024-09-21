## Two Pointer

<details>
<summary>View more</summary>

- **Áp dụng cho:** Các bài toán về mảng, chuỗi, và liên quan đến tìm kiếm đoạn con, số cặp, hoặc đảo ngược thứ tự.

- **Chiến lược:** Sử dụng hai con trỏ bắt đầu từ hai đầu của mảng hoặc chuỗi, sau đó di chuyển chúng về phía nhau hoặc theo một hướng nhất định.

- **Ví dụ:**

  - Tìm cặp số có tổng bảng một giá trị cho trước.
  - Bài toán đảo ngược chuỗi.
  - Các bài toán về Palindrome (chuỗi đối xứng).

- **Bài mẫu:**
  - 125_Valid Palindrome
  - 167_Two Sum II - Input Array Is Sorted

</details>

## Sliding Window

<details>
<summary>View more</summary>

- **Áp dụng cho:** Các bài toán liên quan đến tìm kiếm đoạn con hoặc tổng lớn nhất/nhỏ nhất trong một đoạn con cố định.

- **Chiến lược:** Tạo một cửa sổ (window) có độ dài cố định hoặc động, sau đó dịch chuyển cửa sổ qua mảng hoặc chuỗi để tìm đáp án.

- **Ví dụ:**

  - Tìm đoạn con có tổng lớn nhất.
  - Tìm đoạn con có số phần tử khác nhau trong chuỗi.

- **Bài mẫu:**
  - 3_Longest Substring Without Repeating Characters
  - 209_Minimum Size Subarray Sum
  - 643_Maximum Average Subarray I

</details>

## Hashing (HashMap / HashSet)

<details>
<summary>View more</summary>

- **Áp dụng cho:** Các bài toán liên quan đến tìm kiếm nhanh hoặc kiểm tra sự tồn tại của các giá trị hoặc tập hợp phần tử.

- **Chiến lược:** Sử dụng HashMap/HashSet để lưu trữ và truy xuất nhanh các giá trị cần thiết, như số lần xuất hiện hoặc giá trị trước đó.

- **Ví dụ:**

  - Tìm cặp phần tử có tổng bằng một giá trị cho trước.
  - Tìm chuỗi con hoặc dãy số khác nhau.

- **Bài mẫu:**
  - 1_Two Sum
  - 560_Subarray Sum Equals K

</details>

## Binary Search

<details>
<summary>View more</summary>

- **Áp dụng cho:** Các bài toán yêu cầu tìm kiếm trong mảng hoặc dãy số đã được sắp xếp.

- **Chiến lược:** Sử dụng chia đôi để giảm không gian tìm kiếm theo mỗi lần lặp.

- **Ví dụ:**

  - Tìm phần tử trong mảng sắp xếp.
  - Tìm giá trị cực đại hoặc cực tiểu.

- **Bài mẫu:**
  - 704_Binary Search
  - 33_Search in Rotated Sorted Array

</details>

## Dynamic Programming

<details>
<summary>View more</summary>

- **Áp dụng cho:** Các bài toán liên quan đến tối ưu hóa các giá trị hoặc chuỗi, dãy số có thể chia nhỏ thành các bài toán con.

- **Chiến lược:** Sử dụng các bảng (memoization hoặc tabulation) để lưu trữ và tái sử dụng kết quả của các bài toán con.

- **Ví dụ:**

  - Bài toán về tối ưu hóa chuỗi con hoặc tính số lượng cách.
  - Bài toán về knapsack (cái túi).

- **Bài mẫu:**
  - 70_Climbing Stairs
  - 55_Jump Game
  - 198_House Robber

</details>

## Top K Elements

<details>
<summary>View more</summary>

- **Áp dụng cho:** Các bài toán yêu cầu tìm kiếm hoặc sắp xếp các phần tử theo thứ tự tăng dần hoặc giảm dần.

- **Chiến lược:** Sử dụng Heap (Priority Queue), Quickselect để lưu trữ và truy xuất nhanh các phần tử theo thứ tự tăng dần hoặc giảm dần.

- **Ví dụ:**

  - Tìm k phần tử lớn nhất hoặc nhỏ nhất.
  - Tìm k phần tử khác nhau.

- **Bài mẫu:**
  - 215_Kth Largest Element in an Array
  - 347_Top K Frequent Elements
  - 692_Top K Frequent Words
  - 703_Kth Largest Element in a Stream

</details>

## Backtracking

<details>
<summary>View more</summary>

- **Áp dụng cho:** Các bài toán yêu cầu tìm tất cả các lời giải hoặc đường dẫn, như giải mê cung, bài toán ghép đôi hoặc bài toán tổ hợp.

- **Chiến lược:** Thử tất cả các khả năng có thể, nếu gặp ngõ cụt thì quay lại bước trước đó (backtrack) và thử các lựa chọn khác.

- **Ví dụ:**

  - Các bài toán về tổ hợp, hoán vị, sudoku, hoặc giải mê cung.

- **Bài mẫu:**
  - 46_Permutations
  - 78_Subsets

</details>

## Greedy

<details>
<summary>View more</summary>

- **Áp dụng cho:** Các bài toán yêu cầu tối ưu hóa, trong đó tại mỗi bước, bạn luôn chọn phương án tốt nhất tại thời điểm đó.

- **Chiến lược:** Tham lam chọn giải pháp tốt nhất tại mỗi bước, sau đó tiếp tục với bài toán con còn lại.

- **Ví dụ:**

  - Bài toán về chọn hoạt động, hoặc chọn phần tử lớn nhất/nhỏ nhất.

- **Bài mẫu:**
  - 55_Jump Game
  - 45_Jump Game II
  - 435_Non-overlapping Intervals

</details>

## Fast & Slow Pointers (Tortoise and Hare)

<details>
<summary>View more</summary>

- **Áp dụng cho:** Linked list, chuỗi tuần hoàn.

- **Chiến lược:** Sử dụng hai con trỏ (một nhanh, một chậm) để dò tìm chu kỳ hoặc phần tử đặc biệt.

- **Ví dụ:**

  - Tìm chu kỳ trong danh sách liên kết.
  - Tìm phần tử giữa trong danh sách liên kết.

- **Bài mẫu:**

  - 141_Linked List Cycle
  - 142_Linked List Cycle II
  - 202_Happy Number

</details>

## Merge Intervals

<details>
<summary>View more</summary>

- **Áp dụng cho:** Các bài toán liên quan đến việc ghép các khoảng thời gian hoặc đoạn.

- **Chiến lược:** Sắp xếp các khoảng và sau đó ghép chúng lại nếu chúng giao nhau.

- **Ví dụ:**

  - Tìm khoảng thời gian chung.
  - Tìm số lượng khoảng không giao nhau.

- **Bài mẫu:**

  - 56_Merge Intervals
  - 57_Insert Interval
  - 435_Non-overlapping Intervals

</details>

## Breadth-First Search (BFS)

<details>
<summary>View more</summary>

- **Áp dụng cho:** Đồ thị, cây, các bài toán về tìm kiếm đường đi ngắn nhất, tìm kiếm theo cấp độ.

- **Chiến lược:** Sử dụng hàng đợi để duyệt qua các đỉnh/kết nối một cách tuần tự, tầng bậc.

- **Ví dụ:**

  - Tìm đường đi ngắn nhất giữa hai đỉnh.
  - Tìm kiếm theo cấp độ.

- **Bài mẫu:**

  - 102_Binary Tree Level Order Traversal
  - 127_Word Ladder

</details>

## Depth-First Search (DFS)

<details>
<summary>View more</summary>

- **Áp dụng cho:** Đồ thị, cây, tìm kiếm các đường đi, các vùng liên thông.

- **Chiến lược:** Duyệt sâu vào từng nhánh trước khi quay lại các nhánh khác.

- **Ví dụ:**

  - Tìm đường đi giữa hai đỉnh.
  - Tìm các thành phần liên thông.

- **Bài mẫu:**

  - 200_Number of Islands
  - 130_Surrounded Regions
  - 104_Maximum Depth of Binary Tree

</details>

## Trie (Prefix Tree)

<details>
<summary>View more</summary>

- **Áp dụng cho:** Các bài toán liên quan đến chuỗi, đặc biệt là kiểm tra tiền tố, từ điển, hoặc tự động hoàn thành từ.

- **Chiến lược:** Trie là một cấu trúc cây chuyên dùng để lưu trữ và tìm kiếm các chuỗi hiệu quả, dựa trên tiền tố chung.

- **Ví dụ:**

  - Tìm kiếm từ điển.
  - Tìm kiếm tiền tố.

- **Bài mẫu:**

  - 208_Implement Trie (Prefix Tree)
  - 211_Design Add and Search Words Data Structure
  - 648_Replace Words

</details>

## Union-Find (Disjoint Set Union - DSU)

<details>
<summary>View more</summary>

- **Áp dụng cho:** Các bài toán liên quan đến các tập hợp rời rạc, kiểm tra và hợp nhất các tập hợp.

- **Chiến lược:** Sử dụng kỹ thuật path compression và union by rank để tối ưu hóa việc hợp và tìm kiếm tập hợp.

- **Ví dụ:**

  - Bài toán về xác định thành phần liên thông.

- **Bài mẫu:**
  - 323_Number of Connected Components in an Undirected Graph
  - 547_Number of Provinces

</details>

## Topological Sorting

<details>
<summary>View more</summary>

- **Áp dụng cho:** Các bài toán liên quan đến đồ thị có hướng (DAG) và phụ thuộc giữa các công việc hoặc phần tử.

- **Chiến lược:** Xếp các đỉnh của đồ thị theo thứ tự mà mọi cung của đồ thị đều từ đỉnh trước tới đỉnh sau.

- **Ví dụ:**

  - Lên kế hoạch thực hiện các nhiệm vụ với điều kiện trước sau.

- **Bài mẫu:**
  - 207_Course Schedule
  - 210_Course Schedule II

</details>

## Bit Manipulation

<details>
<summary>View more</summary>

- **Áp dụng cho:** Các bài toán yêu cầu tối ưu hóa về bộ nhớ hoặc thao tác với các số nhị - phân.

- **Chiến lược:** Sử dụng các phép toán bit như AND, OR, XOR, và dịch chuyển bit để giải - quyết bài toán.

- **Ví dụ:**

  - Các bài toán về dãy số hoặc kiểm tra tính chất của số nhị phân.

- **Bài mẫu:**
  - 136_Single Number
  - 338_Counting Bits

</details>
