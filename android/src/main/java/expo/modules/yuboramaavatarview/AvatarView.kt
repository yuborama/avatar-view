package expo.modules.yuboramaavatarview

import android.content.Context
import android.graphics.Color
import android.graphics.Typeface
import android.graphics.drawable.GradientDrawable
import android.view.Gravity
import android.util.TypedValue
import androidx.appcompat.widget.AppCompatTextView
import expo.modules.kotlin.AppContext
import expo.modules.kotlin.views.ExpoView
import kotlin.math.max

class AvatarView(context: Context, appContext: AppContext) : ExpoView(context, appContext) {
  private var avatarSizeDp: Float = 120f
  private var avatarColor: Int = generateRandomColor()

  private val initialsView = AppCompatTextView(context).apply {
    gravity = Gravity.CENTER
    setTextColor(Color.WHITE)
    typeface = Typeface.create(Typeface.DEFAULT, Typeface.NORMAL)
    textSize = 38f
  }

  var name: String = ""
    set(value) {
      field = value
      avatarColor = generateRandomColor()
      updateAppearance()
    }

  var size: Float = 120f
    set(value) {
      field = if (value <= 0f) 120f else value
      avatarSizeDp = field
      updateCircleSize()
      updateAppearance()
    }

  init {
    addView(initialsView, LayoutParams(LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT).apply {
      gravity = Gravity.CENTER
    })
    updateAppearance()
  }

  override fun onSizeChanged(w: Int, h: Int, oldw: Int, oldh: Int) {
    super.onSizeChanged(w, h, oldw, oldh)
    updateCircleSize()
  }

  private fun updateCircleSize() {
    val side = dpToPx(avatarSizeDp)
    initialsView.layoutParams = (initialsView.layoutParams as LayoutParams).apply {
      this.width = side
      this.height = side
      gravity = Gravity.CENTER
    }
    initialsView.setTextSize(TypedValue.COMPLEX_UNIT_PX, side / 3f)
  }

  private fun updateAppearance() {
    initialsView.text = getInitialsFromName(name)
    initialsView.background = GradientDrawable().apply {
      shape = GradientDrawable.OVAL
      setColor(avatarColor)
      setStroke(max(dpToPx(4f), (dpToPx(avatarSizeDp) * 0.05f).toInt()), Color.WHITE)
    }
  }

  private fun dpToPx(dp: Float): Int =
    TypedValue.applyDimension(
      TypedValue.COMPLEX_UNIT_DIP,
      dp,
      context.resources.displayMetrics
    ).toInt()
}