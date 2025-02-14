import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/cascader/basic-usage')
  await page.getByPlaceholder('请选择').click()
  const cascader = page.locator(
    '.tiny-cascader-menu > .tiny-cascader-menu__wrap > .tiny-cascader-menu__list > .is-active > span'
  )
  await expect(cascader).toHaveText('安装 CLI')
})
