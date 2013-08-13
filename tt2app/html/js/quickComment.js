/**
 * Created with IntelliJ IDEA.
 * User: huxiangtao
 * Date: 13-8-13
 * Time: 涓??9:39
 * To change this template use File | Settings | File Templates.
 */

(function() {
    var content = [
                '<div class="quick-editor editor-body">',
                    '<div contenteditable="true" class="editor-wrap"></div>',
                    '<button class="btn btn-small pull-right">发布</button>',
                '</div>'
                ].join("");
    var self = $('#J_quickComm');
    $('#J_quickComm').toggle(function() {
        self.parent().append(content);
    },function() {
        var deContent = self.parent().find($('.quick-editor'));
        deContent.remove();
    });
})();