// bước 1: Khai báo đối tượng lưu trữ thông tin các vận động viên
const teams = [
    {member1: 'John',km: 3},
    {member2: 'Jane',km: 4},
    {member3: 'David',km: 5},
    {member4: 'Peter', km: 6}
];

//bước 2: Khai báo biến sum

let sum=0;

// bước 3: Sử dụng vòng lặp for of để duyệt qua các phần tử trong đối tượng, và tính toán số km đội đã chạy được

for (const {km} of teams) {
    sum += km;
}
console.log(`Tổng số km: ${sum}`); // 18