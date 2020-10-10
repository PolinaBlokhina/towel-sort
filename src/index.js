
// You should implement your task here.

module.exports = function towelSort (matrix) {
    ans = [];
    if ((matrix)&&(matrix.length > 0)) {
        ans = [];
        var n = matrix.length;
        for (var i = 0; i < n; i++) {
            if (i % 2 == 0) {
                for (var j = 0; j < matrix[i].length; j++) {
                    ans[ans.length] = matrix[i][j]
                }
            }
            else {
                for (var j = matrix[i].length - 1; j >= 0; j--) {
                    ans[ans.length] = matrix[i][j]
                }
            }
        }
    }
    else {
        ans = [];
    }
    return ans;
}
