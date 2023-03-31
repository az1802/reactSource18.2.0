/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export type RootTag = 0 | 1;

export const LegacyRoot = 0; //遗留模式的根节点
export const ConcurrentRoot = 1; //concurrent模式的根节点
