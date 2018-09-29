var app = new Vue({
    el: '#app',
    data: {
        product: [
            {
                id: 1,
                category: 'electronic',
                name: 'iPhone 8',
                price: 8888,
                count: 1
            },
            {
                id: 2,
                category: 'electronic',
                name: 'Huwei Mate10',
                price: 6666,
                count: 1
            },
            {
                id: 3,
                category: 'electronic',
                name: 'Lenovo',
                price: 6588,
                count: 1
            },
            {
                id: 4,
                category: 'book',
                name: '《Vue.js实战》',
                price: 79,
                count: 1
            },
            {
                id: 5,
                category: 'book',
                name: '《JavaScript高级编程技术（第三版）》',
                price: 59,
                count: 1
            },
            {
                id: 6,
                category: 'book',
                name: '《Spring实战》',
                price: 89,
                count: 1
            },
            {
                id: 7,
                category: 'fruit',
                name: 'banana',
                price: 1.48,
                count: 1
            },
            {
                id: 8,
                category: 'fruit',
                name: 'apple',
                price: 4.5,
                count: 1
            },
            {
                id: 9,
                category: 'fruit',
                name: 'grape',
                price: 10.1,
                count: 1
            }
        ],
        selectList: [],
        checked: false,
        checkedCategory: true,
        selectCategory: ['electronic', 'book', 'fruit'],
        checked1: true
    },
    computed: {
        category: function () {
            return this.selectCategory;
        },
        totalPrice: function () {
            var total = 0;
            var selectlist = this.selectList;
            for (var i = 0, len = selectlist.length; i < len; i++) {
                var outIndex = parseInt(selectlist[i].split("-")[0]);
                var index = parseInt(selectlist[i].split("-")[1]);
                var item = this.list[outIndex][index];
                if (item) {
                    total += parseFloat(item.price) * parseInt(item.count);
                }
                else {
                    continue;
                }

            }
            total = total.toFixed(2);
            //return total;
            return total.toString().replace(/\B(?=(\d{3})+\.)/g, ',');
        },
        list: function () {
            var products = [];
            var _this = this;
            for (var i = 0, len = _this.category.length; i < len; i++) {
                var category1 = [];
                var categoryName = _this.category[i];
                for (var j = 0, len1 = _this.product.length; j < len1; j++) {
                    var product1 = _this.product[j];
                    var productCategory = product1.category;
                    if (productCategory === categoryName) {
                        category1.push(product1);
                    }
                }
                products.push(category1);
            }
            return products;
        }
    },
    methods: {
        handleReduce: function (index, ind) {
            var item = this.list[index][ind];
            if (item.count < 2) {
                return;
            }
            item.count--;
        },
        handleAdd: function (index, ind) {
            var item = this.list[index][ind];
            item.count++;
        },
        handleRemove: function (index, ind) {
            var proId = this.list[index][ind].id;
            //遍历product数组
            var pLength = this.product.length;
            var pIndex = 0;
            for (var k = 0; k < pLength; k++) {
                if (proId === this.product[k].id) {
                    pIndex = k;
                    break;
                }
            }
            this.product.splice(pIndex, 1);
        },
        swapCheck: function () {
            var selectList = document.getElementsByName('selectList');
            var len2 = selectList.length;
            if (this.checked) {
                for (var i = 0; i < len2; i++) {
                    var item = selectList[i];
                    item.checked = false;
                }
                this.checked = false;
                this.selectList = [];
            }
            else {
                for (i = 0; i < len2; i++) {
                    item = selectList[i];
                    if (item.checked === false) {
                        item.checked = true;
                        this.selectList.push(selectList[i].value);
                    }
                }
                this.checked = true;

            }
        },
        swapCheckCategory: function () {
            var selectCategoryList = document.getElementsByName('selectCategoryList');
            var len = selectCategoryList.length;
            if (this.checkedCategory && len === this.selectCategory.length) {
                for (var i = 0; i < len; i++) {
                    var item = selectCategoryList[i];
                    item.checked = false;
                }
                this.checkedCategory = false;
                this.selectCategory = [];
            }
            else {
                for (i = 0; i < len; i++) {
                    item = selectCategoryList[i];
                    if (item.checked === false) {
                        item.checked = true;
                        this.selectCategory.push(selectCategoryList[i].value);
                    }
                }
                this.checkedCategory = true;
            }
        },
        checkQuanxuan: function () {
            var flag = false;
            var selectCategoryList = document.getElementsByName('selectCategoryList');
            var len = selectCategoryList.length;
            for (var i = 0; i < len; i++) {
                var item = selectCategoryList[i];
                if (item.checked === false) {
                    flag = true;
                    break;
                }
            }
            if (flag) {
                this.checkedCategory = false;
            }
            else {
                this.checkedCategory = true;
            }

            var flag2 = false;
            var selectList = document.getElementsByName('selectList');
            var len2 = selectList.length;
            for (var j = 0; j < len2; j++) {
                var product = selectList[j];
                if (product.checked === false) {
                    flag2 = true;
                    break;
                }
            }
            if (flag2) {
                this.checked = false;
            }
            else {
                this.checked = true;
            }

        }
    }
});
