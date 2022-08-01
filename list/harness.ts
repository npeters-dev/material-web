/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {Harness} from '@material/web/testing/harness';

import {List} from './lib/list';
import {ListItemHarness} from './lib/listitem/harness';

/**
 * Test harness for list.
 */
export class ListHarness extends Harness<List> {
  /** @return List item harnesses. */
  getItems() {
    return this.element.items.map((item) => new ListItemHarness(item));
  }
}