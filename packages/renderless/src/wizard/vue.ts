/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */

import {
  btnSaveHandle,
  nodeClick,
  submitHandle,
  lastStepHandle,
  nextStepHandle,
  showNode,
  timelineflowData,
  setTimelineflowNodeStatus
} from './index'

export const api = [
  'state',
  'btnSaveHandle',
  'nodeClick',
  'submitHandle',
  'lastStepHandle',
  'nextStepHandle',
  'showNode'
]

export const renderless = (props, { onMounted, reactive }, { emit, constants }) => {
  const state = reactive({
    datas: props.data,
    submitShow: false,
    showIndex: null,
    doing: constants.DOING_STATUS,
    ready: constants.READY_STATUS,
    wait: constants.WAIT_STATUS
  })

  const api = {
    state,
    nodeClick: nodeClick(emit),
    showNode: showNode(emit),
    nextStepHandle: nextStepHandle({ state, emit }),
    lastStepHandle: lastStepHandle({ state, emit }),
    submitHandle: submitHandle({ state, emit }),
    btnSaveHandle: btnSaveHandle({ state, emit }),
    setTimelineflowNodeStatus: setTimelineflowNodeStatus(state)
  }

  api.timelineflowData = timelineflowData({ state, props, api })

  onMounted(api.timelineflowData)

  return api
}
