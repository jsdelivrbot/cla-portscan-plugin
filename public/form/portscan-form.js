(function(params) {
    var data = params.data;

    var server = Cla.ui.ciCombo({
        name: 'server',
        value: params.data.server || '',
        role: 'Server',
        fieldLabel: _('Server'),
        allowBlank: false,
        with_vars: 1
    });

    var userTextField = Cla.ui.textField({
        name: 'user',
        fieldLabel: _('User'),
        value: data.user || '',
        allowBlank: true
    });

    var portType = Cla.ui.comboBox({
        name: 'portType',
        fieldLabel: _('Port Type'),
        data: [
            ['TCP', _('TCP')],
            ['UDP', _('UDP')],
        ],
        value: params.data.portType || 'TCP',
        allowBlank: false,
        anchor: '100%',
        singleMode: false
    });

    var initPort = Cla.ui.textField({
        name: 'initPort',
        value: params.data.initPort || '1',
        fieldLabel: _('Starting Port'),
        allowBlank: true
    });
    var endPort = Cla.ui.textField({
        name: 'endPort',
        value: params.data.endPort || '65535',
        fieldLabel: _('Finishing Port'),
        allowBlank: true
    });

    var errorBox = Cla.ui.errorManagementBox({
        errorTypeName: 'errors',
        errorTypeValue: params.data.errors || 'fail',
        rcOkName: 'rcOk',
        rcOkValue: params.data.rcOk,
        rcWarnName: 'rcWarn',
        rcWarnValue: params.data.rcWarn,
        rcErrorName: 'rcError',
        rcErrorValue: params.data.rcError,
        errorTabsValue: params.data
    });

    return [
        server,
        userTextField,
        portType,
        initPort,
        endPort,
        errorBox
    ]
})